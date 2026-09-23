# 积 σ-代数的生成基　`prop.product-sigma-base`　·　说明
根 `../`

意义：算积 $\sigma$代数时，**每一维只需要拿一个生成元族就够了**，不必把整个 $\mathcal{M}_\alpha$ 搬进来。

典型用法：$\mathbb{R}$ 上取 $\mathcal{E} =$ 半开区间 { (a, b] }（它生成 $\mathfrak{B}_\mathbb{R}$），于是 $\mathfrak{B}_\mathbb{R} \otimes \mathfrak{B}_\mathbb{R}$ 已经由形如 $(a, b] \times (c, d]$ 的矩形生成 —— 这正是后面 Fubini 定理要用的事实。

证明是「生成」的通用套路：两边都等于「包含 $\mathcal{F}$ 的最小 $\sigma$代数」，各自验证 $\mathcal{F} \subseteq$ 一边、另一边 $\subseteq \mathcal{F}$。
