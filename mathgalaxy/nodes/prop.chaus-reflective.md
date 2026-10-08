# 紧 Haus 是反射子范畴　`prop.chaus-reflective`
Stone–Čech 紧化：$\mathbf{CHaus}$ 是 $\mathbf{Top}$ 的反射子范畴
layer 15 · 命题 · 紧 Haus 与 Stone · 范畴论+拓扑学

$\mathbf{CHaus}$ 是 $\mathbf{Top}$ 的**反射子范畴**，反射叫 **Stone–Čech 紧化**：

$$\beta : \mathbf{Top} \longrightarrow \mathbf{CHaus}, \qquad X \mapsto \beta X$$

即对每个 $X \in \mathbf{Top}$ 与每个紧 Hausdorff 空间 $K$，
> 陈述续见 `nodes/prop.chaus-reflective.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.chaus` 紧 Hausdorff 空间范畴 + `def.compact` 紧：构造 $\beta X$ 并验证泛性质　proofs/imp.stone-cech.md
- `def.compact` 紧：用到了定义 紧　proofs/def-link.compact-stonecech.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-chaus-reflective.md
- `def.compact` 紧：用到了定义 紧　proofs/def-dep.compact-stonecech.md
- `def.hausdorff` Hausdorff 空间：用到了定义 Hausdorff 空间　proofs/def-dep.hausdorff-stonecech.md

> 说明见 `notes/prop.chaus-reflective.md`
