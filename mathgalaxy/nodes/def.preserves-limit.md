# 保极限的函子　`def.preserves-limit`
函子保极限（Preservation of Limits）
layer 12 · 定义 · 函子与自然变换 · 范畴论

设 $D : I \to \mathcal{C}$ 是图、$F : \mathcal{C} \to \mathcal{D}$ 是函子。$F$ 诱导出锥之间的比较映射

$$F(\lim D) \longrightarrow \lim (F \circ D).$$

若这个比较映射对**每个**（相应型别的）图 $D$ 都是同构，就说 $F$ **保极限**（记 $\lim D \cong \lim F \circ D$）。对偶地：**保余极限**。

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.preslim-limit.md
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.preslim-functor.md

## 它能推出什么 / 谁在用它
- 被 `def.exact-functor` 正合函子 用

> 说明见 `notes/def.preserves-limit.md`
