# 紧生成空间是余反射子范畴　`prop.cg-coreflective`
紧生成空间是 $\mathbf{Top}$ 的余反射子范畴
layer 16 · 命题 · 紧生成空间 · 拓扑学+范畴论

紧生成空间构成的范畴 $k\mathbf{Top}$ 是 $\mathbf{Top}$ 的**余反射子范畴**：含入函子 $i : k\mathbf{Top} \hookrightarrow \mathbf{Top}$ 有**右**伴随

$$k : \mathbf{Top} \longrightarrow k\mathbf{Top}, \qquad X \mapsto kX$$

即 $i \dashv k$。$kX$ 与 $X$ 有同一个集合，拓扑换成紧生成的那一个。

## 为什么成立（入边，证明在 proofs/）
- `def.compactly-generated` 紧生成空间：用到了定义 紧生成空间　proofs/def-dep.cg-coreflective.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-cg-coreflective.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.top-cond-adjoint` Top 与 Cond 的伴随

> 说明见 `notes/prop.cg-coreflective.md`
