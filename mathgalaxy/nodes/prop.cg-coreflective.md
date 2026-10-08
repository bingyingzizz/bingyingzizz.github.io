# 紧生成空间是余反射子范畴　`prop.cg-coreflective`
紧生成空间是 $\mathbf{Top}$ 的余反射子范畴
layer 18 · 命题 · 紧生成空间与弱 Hausdorff · 拓扑学

紧生成空间构成的范畴 $k\mathbf{Top}$ 是 $\mathbf{Top}$ 的**余反射子范畴**：含入函子 $i : k\mathbf{Top} \hookrightarrow \mathbf{Top}$ 有**右**伴随

$$k : \mathbf{Top} \longrightarrow k\mathbf{Top}, \qquad X \mapsto kX$$

即 $i \dashv k$。$kX$ 与 $X$ 有同一个集合，拓扑换成 $k$-拓扑。

## 为什么成立（入边，证明在 proofs/）
- `def.compactly-generated` 紧生成空间：用到了定义 紧生成空间　proofs/def-dep.cg-coreflective.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-cg-coreflective.md
- `def.k-topology` k-开、k-闭与 k-拓扑：用到了定义 k-开、k-闭与 k-拓扑　proofs/def-dep.cgcoref-ktopo.md
- `def.compactly-generated` 紧生成空间：用到了定义 紧生成空间　proofs/def-dep.cgcoref-cg.md

> 说明见 `notes/prop.cg-coreflective.md`

- …另有入边，续页见 `nodes/prop.cg-coreflective.2.md`

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/prop.cg-coreflective.3.md`
