# 内射的天际线层 $\implies$ 层范畴有足够多内射
`imp.enough-injectives-sheaf` · 推出 · strong 边 · 根 `../`

`prop.skyscraper-injective` 天际线层是内射层 + `prop.skyscraper-stalks` 天际线层的茎 → `thm.pushforward-enough-injectives` 足够多内射层

**第四步：导出函子合法。** 有了「每个层嵌入内射层」，逐项把 $\mathcal{F}$ 换成内射层即得内射消解（$\mathcal{F} \to I^{0} \to I^{1} \to \cdots$，每次对余核重复），且可取下有界。于是 $R^{q}\Gamma$、$R^{q}f_{*}$ 按「内射消解 + 取同调」有定义；再由比较定理（任一两个内射消解之间的态射在同伦意义下唯一），$R^{q}$ 与消解选取无关。∎

> 续见 proofs/imp.enough-injectives-sheaf.6.md
