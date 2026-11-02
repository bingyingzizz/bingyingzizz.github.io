# 足够多内射 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`thm.pushforward-enough-injectives` 足够多内射层 + `prop.skyscraper-injective` 天际线层是内射层 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**要证**：仿紧 Hausdorff 上 $\check{H}^{n}(X, \mathcal{M}) = H^{n}(X, \mathcal{M})$。走法是「造一个由无环层组成的消解」。

**第一步：Čech 层复形是消解。** 对局部有限开覆盖 $\mathfrak{U} = (U_{i})_{i}$，令 $\check{\mathcal{C}}^{p}(\mathfrak{U}, \mathcal{M}) := \prod_{i_{0} < \cdots < i_{p}} j_{*}(\mathcal{M}|_{U_{i_{0}\cdots i_{p}}})$。

> 续见 proofs/imp.paracompact-cech.2.md
