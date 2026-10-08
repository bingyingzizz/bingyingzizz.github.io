# 截面函子保极限余极限　`prop.condab-section`
截面函子 $\Gamma(F, -)$
layer 17 · 命题 · 凝聚态阿贝尔群 · 凝聚态数学

设 $F \in \mathbf{FCHaus}$。则**截面函子**

$$\Gamma(F, -) : \mathrm{CondAb} \longrightarrow \mathbf{Ab}, \qquad M \mapsto \Gamma(F, M) := M(F)$$
> 陈述续见 `nodes/prop.condab-section.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.free-compact-hausdorff` 自由紧 Hausdorff 空间：用到了定义 自由紧 Hausdorff 空间　proofs/def-dep.free-condab-section.md
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-condab-section.md

## 说明
理由：层在 $F$ 处的截面是「逐点」算出来的，而 $\mathbf{Ab}$ 里有限积与有限余积一致、滤过余极限正合。

这条是**把 $\mathrm{CondAb}$ 的性质逐点归到 $\mathbf{Ab}$** 的通道 —— 下面的 AB 公理那一条就是靠它推出来的。
