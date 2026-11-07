# Euler 示性数与亏格　`prop.eulerchar-genus`　·　说明
根 `../`

**二、把剖分加细到图卡里（完整）。** 设 $\{U_{i}\}$ 是定向图册，则 $\{h^{-1}(U_{i})\}$ 是紧度量空间 $|K|$ 的开覆盖，有勒贝格数 $\lambda>0$（`def.lebesgue-number`，其注里已给完整证明）。反复重心重分（`def.barycentric-subdivision`，网格按 $\tfrac{n}{n+1}$ 缩小）可取 $m$ 使 $\operatorname{mesh}(K^{(m)})<\lambda$；于是 $K^{(m)}$ 的每个单形都落在某个 $h^{-1}(U_{i})$ 里。记 $K'=K^{(m)}$；重心重分不改变几何实现，故 $|K'|=|K|\cong S$，$K'$ 仍是 $S$ 的三角剖分。

> 续见 notes/prop.eulerchar-genus.4.md
