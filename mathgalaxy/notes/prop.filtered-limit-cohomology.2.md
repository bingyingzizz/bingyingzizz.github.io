# 滤过极限的上同调　`prop.filtered-limit-cohomology`　·　说明
根 `../`

于是这个覆盖被某个 $\pi_{i}^{-1}(\mathfrak{X})$ 细化，$\mathfrak{X}$ 是某个 $X_{i}$ 的覆盖。
2. **$M$ 常值 $\implies$ Čech 复形沿 $\pi_{i}$ 拉回不变。** 常值系数的交叠项只依赖「有几块、怎么叠」，与具体开集无关，所以 $\check{C}^{\bullet}(\pi_{i}^{-1}(\mathfrak{X}), M) = \check{C}^{\bullet}(\mathfrak{X}, M)$，取同调得 $\check{H}^{n}(\pi_{i}^{-1}(\mathfrak{X}), M) = \check{H}^{n}(\mathfrak{X}, M)$。
把 1、2 合起来：$\{\check{H}^{n}(\pi_{i}^{-1}(\mathfrak{X}), M)\}$ 这个沿 $i$ 的系统与 $\{\check{H}^{n}(\mathfrak{X}, M)\}_{\mathfrak{X} \in \mathrm{Cov}(X_{i})}$ 共尾，而 Čech 上同调是沿覆盖的滤过余极限，于是 $\check{H}^{n}(X, M) = \varinjlim_{i} \check{H}^{n}(X_{i}, M)$。
最后两端各用一次「紧 Hausdorff 上 Čech = 层上同调」，得到要证的等式。∎

> 续见 notes/prop.filtered-limit-cohomology.3.md
