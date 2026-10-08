# 极限　`def.limit`
极限与余极限（Limit / Colimit）
layer 11 · 定义 · 图与极限 · 范畴论

图 $D : I \to \mathcal{C}$ 的**极限**是对 $D$ 上的锥具有泛性质的那一个：锥 $(\lim D,\ p_i)$ 使得对任意锥 $(Y,\ g_i)$，存在**唯一**的态射 $g : Y \to \lim D$ 使

$$p_i \circ g = g_i \qquad (i \in I)$$

等价地，锥函子被 $\lim D$ 表示：

$$\operatorname{Hom}_{\mathcal{C}^{I}}(\Delta Y, D) \;\cong\; \operatorname{Hom}_{\mathcal{C}}(Y, \lim D)$$
> 陈述续见 `nodes/def.limit.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.commutative-diagram` 交换图：用到了定义 交换图　proofs/def-dep.diagram-limit.md
- `def.cone` 锥：用到了定义 锥　proofs/def-dep.cone-limit.md
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.category-limit.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.right-adjoint-preserves-limits` 右伴随保极限
- ⇒ `thm.saft` 伴随函子定理
- ⇒ `ex.kan-extension` Kan 延拓的两个例子
- 被 `prop.yoneda-embedding` 米田嵌入 用

> 说明见 `notes/def.limit.md`

- …另有出边，续页见 `nodes/def.limit.3.md`
