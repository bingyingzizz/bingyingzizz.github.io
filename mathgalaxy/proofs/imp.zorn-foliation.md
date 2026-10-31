# Zorn 引理：叶状结构的整体存在
`imp.zorn-foliation` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `def.integral-manifold` 积分流形

设 $\mathcal{D}$ 是流形 $M$ 上的对合分布（`def.involutive-distribution`）。局部版 Frobenius（`thm.frobenius`）只给：过每点有局部积分流形。

要证明「过每点存在**极大**连通积分流形（叶）」，把

$$\mathcal{S} := \{\, L \subseteq M : L\ \text{连通积分流形, 且}\ T L = \mathcal{D}|_{L} \,\}$$

按包含排序。链的并仍是连通的积分流形（连通性对递增并保持；局部上每点落在某个 $L_{\alpha}$ 里，故切空间仍是 $\mathcal{D}$）。

由 Zorn 引理取极大元 $L$，即过该点的极大叶。

**叶片互不相交**：若两个极大叶 $L_{1}, L_{2}$ 有公共点 $p$，则由局部唯一性（同一分布过同一点只有一块局部积分流形），$L_{1} \cup L_{2}$ 仍是积分流形且连通 —— 与极大性矛盾。于是 $\{L\}$ 构成 $M$ 的叶状结构。
