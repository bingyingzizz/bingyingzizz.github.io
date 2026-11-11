# 凝聚态阿贝尔群 $\leftrightarrow$ 阿贝尔范畴：都是「好到能算同调」的地方
`ana.condab-abeliancat` · 类比（弱边） · weak 边 · 根 `../`

`thm.condab-ab` 凝聚态阿贝尔群满足 AB6 与 AB4* → `def.abelian-category` 阿贝尔范畴

两处在回答同一个问题：**什么样的范畴里可以放心地做同调代数？**
- 阿贝尔范畴：核余核都存在、单满都正则 $\implies$ 蛇引理、长正合列都成立；
- $\mathrm{CondAb}$：先是预阿贝尔且满足 AB3–AB6，再靠「有足够多紧投射对象」把 Ext 算得出来（`thm.condab-ab`）。

⚠ 不是蕴含：$\mathrm{CondAb}$ **是**阿贝尔范畴（`thm.condab-ab` 证明的那部分），所以这是「实例 $\leftrightarrow$ 一般框架」的类比，不是两个平行理论。
