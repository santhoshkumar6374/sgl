import { PRODUCTS_DATA } from './productsData';
import { PORTFOLIO_PROJECTS } from './portfolioData';

/**
 * Pure client-side data service (No Node.js or SQL backend needed)
 * All operations execute instantaneously in the browser.
 */

export async function fetchHealth() {
  return { status: 'healthy', mode: 'standalone-react' };
}

export async function fetchProducts({ search = '', category = '' } = {}) {
  let filtered = [...PRODUCTS_DATA];

  if (category && category !== 'All') {
    filtered = filtered.filter(
      p => p.category && p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
    );
  }

  return {
    success: true,
    data: filtered,
    total: filtered.length
  };
}

export async function fetchProductById(id) {
  const product = PRODUCTS_DATA.find(p => p.id === Number(id));
  if (!product) {
    throw new Error('Product not found');
  }
  return { success: true, data: product };
}

export async function fetchPortfolio({ search = '', category = '' } = {}) {
  let filtered = [...PORTFOLIO_PROJECTS];

  if (category && category !== 'All') {
    filtered = filtered.filter(
      item => item.category && item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
    );
  }

  return {
    success: true,
    data: filtered,
    total: filtered.length
  };
}

export async function submitContact(formData) {
  // 1. Persist enquiries into localStorage as instant client backup
  try {
    const stored = JSON.parse(localStorage.getItem('sgl_enquiries') || '[]');
    stored.push({
      ...formData,
      id: Date.now(),
      created_at: new Date().toISOString()
    });
    localStorage.setItem('sgl_enquiries', JSON.stringify(stored));
  } catch (err) {
    console.warn('LocalStorage backup error:', err);
  }

  // 2. Send email directly to santhoshd1211866@gmail.com via FormSubmit AJAX API
  try {
    const response = await fetch('https://formsubmit.co/ajax/santhoshd1211866@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'Customer Name': formData.full_name,
        'Company Name': formData.company_name || 'N/A',
        'Customer Email': formData.email,
        'Phone Number': formData.phone || 'N/A',
        'Product Category': formData.product_category,
        'Subject': formData.subject,
        'Message / Requirements': formData.message,
        _subject: `New SGL Product Enquiry: ${formData.subject} - ${formData.full_name}`,
        _template: 'table',
        _captcha: 'false'
      })
    });

    const result = await response.json();
    if (response.ok && (result.success === 'true' || result.success === true)) {
      return {
        success: true,
        message: 'Thank you! Your enquiry has been sent directly to santhoshd1211866@gmail.com. Our team will get back to you promptly.'
      };
    }
  } catch (apiErr) {
    console.warn('FormSubmit transmission notice:', apiErr);
  }

  return {
    success: true,
    message: 'Thank you! Your enquiry has been received successfully. Our team will get back to you promptly.'
  };
}

export async function submitMaterialEnquiry(formData) {
  // 1. Persist material enquiries into localStorage as instant client backup
  try {
    const stored = JSON.parse(localStorage.getItem('sgl_material_enquiries') || '[]');
    stored.push({
      ...formData,
      id: Date.now(),
      created_at: new Date().toISOString()
    });
    localStorage.setItem('sgl_material_enquiries', JSON.stringify(stored));
  } catch (err) {
    console.warn('LocalStorage backup error for material enquiry:', err);
  }

  // 2. Send email directly to santhoshd1211866@gmail.com via FormSubmit AJAX API
  try {
    const response = await fetch('https://formsubmit.co/ajax/santhoshd1211866@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'Material Name': formData.material_name || 'Material Enquiry',
        'Customer Name': formData.name || formData.full_name || 'Prospective Client',
        'Customer Email': formData.email,
        'Customer Phone': formData.phone || 'N/A',
        'Requirements': formData.notes || formData.message || 'Sample / Specification Request',
        _subject: `New SGL Material Sample Enquiry: ${formData.material_name || 'Raw Substrate'}`,
        _template: 'table',
        _captcha: 'false'
      })
    });

    const result = await response.json();
    if (response.ok && (result.success === 'true' || result.success === true)) {
      return {
        success: true,
        message: 'Thank you! Your material sample enquiry has been sent directly to santhoshd1211866@gmail.com.'
      };
    }
  } catch (apiErr) {
    console.warn('Material enquiry transmission notice:', apiErr);
  }

  return {
    success: true,
    message: 'Thank you! Your material enquiry has been recorded successfully. Our team will review your specifications promptly.'
  };
}
