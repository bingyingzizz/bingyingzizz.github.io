# 内射的天际线层 $\implies$ 层范畴有足够多内射
`imp.enough-injectives-sheaf` · 推出 · strong 边 · 根 `../`

`prop.skyscraper-injective` 天际线层是内射层 + `prop.skyscraper-stalks` 天际线层的茎 → `thm.pushforward-enough-injectives` 足够多内射层

用第二步那个伴随同构，这等价于 $\mathcal{G}_{x} \to I_{x}$，而 $\mathcal{G}_{x} \rightarrowtail \mathcal{H}_{x}$ 是阿贝尔群的单射、$I_{x}$ 内射，故可沿 $\mathcal{G}_{x} \to \mathcal{H}_{x}$ 提升为 $\mathcal{H}_{x} \to I_{x}$，再翻译回 $\mathcal{H} \to i_{x,*}I_{x}$。

逐分量做完、由直积的泛性质拼成一个 $\mathcal{H} \to \mathcal{I}$。

故 $\mathcal{I}$ 内射。

∎

**第四步：导出函子合法。** 有了「每个层嵌入内射层」，逐项把 $\mathcal{F}$ 换成内射层即得内射消解（$\mathcal{F} \to I^{0} \to I^{1} \to \cdots$，每次对余核重复），且可取下有界。

> 续见 proofs/imp.enough-injectives-sheaf.4.md
