# site 的层范畴的好性质　`prop.site-properties`
Grothendieck 拓扑下的层范畴
layer 19 · 命题 · 层与拓扑 · 范畴论

若 $\mathcal{C}$ 是 site，则层范畴 $\widehat{\mathcal{C}}$ 中所有极限与余极限存在，并且：

1. 余极限是**万有**的；
2. **滤过余极限正合**；
3. 满态射都是**正则的**且**万有**的；
4. 余积是**不交**的；
5. 等价关系是**有效的**且**万有**的。

## 为什么成立（入边，证明在 proofs/）
- `prop.filtered-exact` 滤过余极限正合 + `def.universal-colimit` 万有关系 + `thm.sheafification` 层化：逐点继承 $\mathbf{Set}$ 的性质　proofs/imp.site-properties.md
- `def.universal-colimit` 万有关系：用到了定义 万有关系　proofs/def-dep.universal-site.md

> 说明见 `notes/prop.site-properties.md`
