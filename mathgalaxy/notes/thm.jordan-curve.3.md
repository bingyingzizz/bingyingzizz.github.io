# Jordan 曲线定理　`thm.jordan-curve`　·　说明
根 `../`

**第四步：边界是 $C$。** 两个分量都开，故 $\partial(\text{分量}) \subseteq C$；反过来 (B) 说 $C$ 的每点都在两个分量的闭包里，故 $C \subseteq \partial(\text{分量})$。两边合起来 $\partial(\text{内部}) = \partial(\text{外部}) = C$。

**三条常用证明路线与本图的关系**：① 同调路线 —— 就是上面的 (A)，外加 Alexander 对偶（本图缺）；② 基本群 / 环绕数路线 —— 证 $\pi_{1}(\mathbb{R}^{2}\setminus C) \cong \mathbb{Z}$，用 $C$ 上的一致化与覆盖空间（本图缺覆盖空间理论）；③ 初等近似路线 —— 先把 $C$ 逼近成多边形，多边形情形可以用「射线穿过的次数奇偶」直接算（这一步本身可写成一段证明），再把多边形的分离性搬回 $C$ 需要 (B) 的局部版本（本图缺）。三条都绕不过 (B)。

> 续见 notes/thm.jordan-curve.4.md
