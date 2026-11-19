# imp.simplicial-cohomology
`imp.simplicial-cohomology` · 推出 · strong 边 · 根 `../`

`def.cech-complex` Čech 复形 + `def.sheaf-cohomology` 层上同调 + `def.injective-module` 内射模 + `def.simplex-category` 单纯形范畴 → `method.simplicial-cohomology` 单纯方法算层上同调

「有截面 $\implies$ 高阶为零」那套（$\mathbb{Z}\cdot h_{X}$ 是投射对象，投射 $\implies$ 无环）保证 $H^{p}(\Gamma(X, F_{n})) = 0$（$p > 0$）。
- **于是 $F_{\bullet} \to M$ 就是一个「由 $\Gamma(X, -)$-零调对象组成的消解」。** 把 Leray 零调性搬过来：$R\Gamma(X, M)$ 可以直接用 $\Gamma(X, F_{\bullet})$ 这个复形算，即 $H^{n}(X, M) = H^{n}\bigl(\Gamma(X, F_{\bullet})\bigr)$。
最后把链复形读成单纯阿贝尔群（Dold–Kan：单纯阿贝尔群的同伦群就是归一化链复形的上同调），就得到 $H^{n}(X, M) \cong \pi^{n}(\Gamma(X, F_{\bullet}))$。两个超覆盖之间的比较给出链同伦（投射性 / 已有的 Ext 论证），所以右边与超覆盖的选取无关。

∎
