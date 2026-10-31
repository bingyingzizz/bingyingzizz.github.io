# 足够多内射 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`thm.pushforward-enough-injectives` 足够多内射层 + `prop.skyscraper-injective` 天际线层是内射层 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第一步：Čech 层复形是消解。** 对局部有限开覆盖 $\mathfrak{U} = (U_{i})_{i}$，令 $\check{\mathcal{C}}^{p}(\mathfrak{U}, \mathcal{M}) := \prod_{i_{0} < \cdots < i_{p}} j_{*}(\mathcal{M}|_{U_{i_{0}\cdots i_{p}}})$。$\mathcal{M}$ 是层，Čech 正合性可以在每个点的小邻域里逐点验证（局部有限保证「只有有限多个 $U_{i}$ 参与」），于是 $0 \to \mathcal{M} \to \check{\mathcal{C}}^{0} \to \check{\mathcal{C}}^{1} \to \cdots$ 正合。取整体截面：$\Gamma(X, \check{\mathcal{C}}^{p}) = \check{C}^{p}(\mathfrak{U}, \mathcal{M})$（直积与截面对 $j_{*}$ 的

> 续见 proofs/imp.paracompact-cech.3.md
