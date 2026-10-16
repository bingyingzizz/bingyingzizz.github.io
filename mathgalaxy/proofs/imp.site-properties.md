# 逐点继承 $\mathbf{Set}$ 的性质
`imp.site-properties` · 推出 · strong 边 · 根 `../`

`prop.filtered-exact` 滤过余极限正合 + `def.universal-colimit` 万有关系 + `thm.sheafification` 层化 → `prop.site-properties` site 的层范畴的好性质

几条性质在 $\mathbf{Set}$ 里都是熟知的：余积就是不交并（万有）、满射就是像的商（正则）、滤过余极限与有限极限交换。

关键是**把 $\mathbf{Set}$ 的性质搬到层范畴**。做法分两步：先在**预层范畴** $\widehat{\mathcal{C}}$ 里验证（预层范畴是函子范畴，一切逐点定义，因而逐点继承 $\mathbf{Set}$ 的性质），再用**层化**把结论送回层范畴。

而层化保有限极限与余极限（上一条定理的推论 2），所以「先算再层化」与「层化后再算」一致，性质就跟着过来了。

> 续见 proofs/imp.site-properties.2.md
