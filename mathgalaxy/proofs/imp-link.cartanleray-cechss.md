# Cartan–Leray（固定覆盖）$\implies$ 取遍覆盖的谱序列
`imp-link.cartanleray-cechss` · 推出 · strong 边 · 根 `../`

`thm.cartan-leray` Cartan–Leray 谱序列 + `prop.cech-as-colim` Čech 上同调是沿覆盖筛的余极限 → `cor.cech-cohomology-spectral` Čech 到上同调的谱序列

先对 $X$ 的**每个**覆盖 $\mathfrak{X}$ 用 Cartan–Leray：存在谱序列
$$E^{p,q}_{2} = \check{H}^{p}\bigl(\mathfrak{X},\ H^{q}(M)\bigr) \;\Longrightarrow\; H^{p+q}(X, M) ✓$$
（右端与覆盖无关，正是层上同调本身）✓。
再沿所有覆盖取**滤过余极限**：$\check{H}^{p}(X, -) = \varinjlim_{\mathfrak{X} \in \operatorname{Cov}(X)} \check{H}^{p}(\mathfrak{X}, -)$ ✓（Čech 上同调就是沿覆盖取的余极限）。
滤过余极限**正合**（保有限极限、保正合列），所以它把每一页的谱序列逐项保下来 —— 页、微分、以及收敛到同一个 $H^{p+q}(X, M)$ 都被保住 ✓。于是得到 $E^{p,q}_{2} = \check{H}^{p}(X, H^{q}(M)) \implies H^{p+q}(X, M)$ ✓。∎
