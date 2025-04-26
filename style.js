// 简单的语言切换功能
document.getElementById('lang-zh').addEventListener('click', function () {
    this.classList.add('active');
    document.getElementById('lang-en').classList.remove('active');
    // 这里可以添加实际的中文内容切换逻辑
    document.getElementById('search-input').placeholder = "搜索产品...";
    document.querySelector('.products-header h2').textContent = "推荐产品";
    document.querySelector('.sort-options span').textContent = "排序:";
});

document.getElementById('lang-en').addEventListener('click', function () {
    this.classList.add('active');
    document.getElementById('lang-zh').classList.remove('active');
    // 这里可以添加实际的英文内容切换逻辑
    document.getElementById('search-input').placeholder = "Search products...";
    document.querySelector('.products-header h2').textContent = "Recommended Products";
    document.querySelector('.sort-options span').textContent = "Sort by:";
});

// 产品卡片点击效果
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function () {
        // 这里可以添加产品详情页面的跳转逻辑
        console.log('Product clicked:', this.querySelector('.product-title').textContent);
    });
});
