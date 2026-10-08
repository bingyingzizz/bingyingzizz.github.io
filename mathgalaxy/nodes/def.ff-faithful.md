# 忠实 / 满 / 全忠实　`def.ff-faithful`
忠实、满、全忠实函子（Faithful / Full / Fully Faithful）
layer 9 · 定义 · 函子与自然变换 · 范畴论

函子 $F : \mathcal{C} \to \mathcal{C}'$ 对每一对对象 $X, Y$ 给出一个映射

$$\operatorname{Hom}_{\mathcal{C}}(X, Y) \longrightarrow \operatorname{Hom}_{\mathcal{C}'}(F(X), F(Y)), \qquad f \mapsto F(f)$$

按这个映射的性质来命名：

- **忠实**（faithful）：每个这样的映射都是单射；
- **满**（full）：每个这样的映射都是满射；
- **全忠实**（fully faithful）：每个这样的映射都是双射。

## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-ff.md

## 它能推出什么 / 谁在用它
- ⇒ `def.cat-equivalence` 范畴等价
- ⇒ `prop.adjoint-full-faithful` 全忠实与单位
- 被 `prop.yoneda-embedding` 米田嵌入 用
- 被 `prop.yoneda-embedding` 米田嵌入 用
- 被 `prop.adjoint-full-faithful` 全忠实与单位 用

> 说明见 `notes/def.ff-faithful.md`

- …另有出边，续页见 `nodes/def.ff-faithful.2.md`
