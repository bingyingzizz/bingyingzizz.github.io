# 凝聚态阿贝尔群　`def.condensed-abelian-group`
凝聚态阿贝尔群（Condensed Abelian Group）
layer 17 · 定义 · 凝聚态阿贝尔群 · 凝聚态数学

**凝聚态阿贝尔群**就是 $\mathrm{Cond}$ 上的**阿贝尔层**。四种说法给出同一个范畴：

$$\mathrm{Ab}(\mathrm{Cond}) \;\simeq\; \mathrm{Cond}(\mathrm{Ab}) \;\simeq\; \widehat{\mathbf{CHaus}}(\mathrm{Ab}) \;\simeq\; \widehat{\mathbf{FCHaus}}(\mathrm{Ab})$$

记作 $\mathrm{CondAb}$。

## 为什么成立（入边，证明在 proofs/）
- `def.condensed-set` 凝聚态集：用到了定义 凝聚态集　proofs/def-dep.condensed-ab.md
- `def.sheaf` 层：用到了定义 层　proofs/def-dep.sheaf-condensed-ab.md
- `def.abelian-sheaf` 阿贝尔层：用到了定义 阿贝尔层　proofs/def-dep.condab-abelsheaf.md

## 它能推出什么 / 谁在用它
- 被 `thm.condab-ab` CondAb 满足 AB6 与 AB4* 用
- 被 `def.tensor-abelian-sheaf` 阿贝尔层的张量积 用
- 被 `prop.abtop-to-abcond` 拓扑阿贝尔群嵌入凝聚态 用

> 说明见 `notes/def.condensed-abelian-group.md`

- …另有出边，续页见 `nodes/def.condensed-abelian-group.2.md`
