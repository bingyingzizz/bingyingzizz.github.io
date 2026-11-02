# Frobenius 定理　`thm.frobenius`　·　续页（第 2 页）
[在星图里打开](../#n=thm.frobenius)　·　第 1 页 [nodes/thm.frobenius.md](./thm.frobenius.md)

## 陈述（续）
设 $\mathcal{D}$ 是 $n$ 维光滑流形 $M$ 上的光滑 $k$ 阶切分布。以下四条等价：
1. $\mathcal{D}$ 对合（`def.involutive-distribution`）；
2. **平坦坐标存在**：每点 $p$ 有邻域 $U$ 与坐标 $(x^{1},\ldots,x^{n})$，使 $\mathcal{D}|_{U}$ 由 $\partial_{1},\ldots,\partial_{k}$ 生成；
3. **局
部可积**：每点 $p$ 落在某块 $k$ 维积分流形里（`def.integral-manifold`）；
4. **叶状结构存在**：$M$ 被一族互不相交的极大连通积分流形（叶）覆盖，每片叶是浸入子流形。
特别地：对合**当且仅当**局部总有「把 $\mathcal{D}$ 拉直成坐标面」的坐标。$k = n-1$ 且 $\mathcal{D} = \ker\omega$（$\omega$ 处处非零）时，对合等价于

$$\omega \wedge \mathrm{d}\omega = 0,$$
这就是经典教材里的 Frobenius 条件；本图只陈述这一支，不展开。

> 续见 [nodes/thm.frobenius.3.md](./thm.frobenius.3.md)
