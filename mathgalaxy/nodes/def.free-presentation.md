# 自由表示　`def.free-presentation`
自由表示（Free Presentation）
layer 15 · 定义 · 紧 Haus 与 Stone · 拓扑学

紧 Hausdorff 空间之间的连续满射 $F \twoheadrightarrow S$ 叫 $S$ 的**自由表示**，如果

1. $F$ 是自由紧 Hausdorff 空间；
2. $F \to S$ 是满态射；
3. 令 $R := F \times_{S} F$，则 $F \to R$ 是满态射。

此时 $S \cong \operatorname{coker}(R \rightrightarrows F)$。

## 为什么成立（入边，证明在 proofs/）
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-free-presentation.md
- `def.chaus` 紧 Hausdorff 空间范畴：用到了定义 紧 Hausdorff 空间范畴　proofs/def-dep.chaus-free-presentation.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.cond-topos` Cond 是拓扑斯
- ⇒ `thm.cond-equiv-fchaus` Cond 即 FCHaus 上的层
- ⇒ `prop.cond-epi` 凝聚态集满态射的判据
- 被 `cor.chaus-free-presentation` 紧 Haus 都有自由表示 用

> 说明见 `notes/def.free-presentation.md`
