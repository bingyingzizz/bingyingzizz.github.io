# 米田嵌入　`prop.yoneda-embedding`
米田嵌入（Yoneda Embedding）
layer 14 · 命题 · 预层与米田 · 范畴论

对应

$$\delta : \mathcal{C} \longrightarrow \widehat{\mathcal{C}}, \qquad X \mapsto h_{X} = \operatorname{Hom}_{\mathcal{C}}(-, X)$$

是一个**全忠实**函子，并且**保持所有极限**。

## 为什么成立（入边，证明在 proofs/）
- `lem.yoneda` 米田引理：米田引理 $\implies$ 米田嵌入全忠实、保极限　proofs/imp.yoneda-embedding.md
- `def.limit` 极限：用到了定义 极限　proofs/def-link.limit-yoneda-embedding.md
- `def.ff-faithful` 忠实 / 满 / 全忠实：用到了定义 忠实 / 满 / 全忠实　proofs/def-link.ff-faithful-yoneda-embedding.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.nat-yoneda-embedding.md
- `prop.chaus-reflective` 紧 Haus 是反射子范畴：米田嵌入与 Stone–Čech 紧化：都是「嵌进一个大得多的世界」　proofs/ana.embed-better-world.md

> 说明见 `notes/prop.yoneda-embedding.md`

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/prop.yoneda-embedding.2.md`
