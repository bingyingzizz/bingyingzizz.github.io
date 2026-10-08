# 紧开拓扑　`def.compact-open-topology`
紧开拓扑（Compact-Open Topology）
layer 15 · 定义 · 紧生成空间与弱 Hausdorff · 拓扑学

设 $X, Y \in \mathbf{Top}$。对每个连续映射 $g : S \to X$（$S$ 紧 Hausdorff）与每个开集 $V \subseteq Y$，令

$$W_{S,V} := \{\, f : X \to Y \;\mid\; \operatorname{Im}(f \circ g) \subseteq V \,\}.$$

$C(X, Y)$（也就是 $\operatorname{Hom}_{\mathbf{Top}}(X, Y)$）上的**紧开拓扑**是由全体 $W_{S,V}$ 生成的拓扑。

## 为什么成立（入边，证明在 proofs/）
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/def-dep.compactopen-topology.md
- `def.compact` 紧：用到了定义 紧　proofs/def-dep.compactopen-compact.md
- `def.continuous` 连续：用到了定义 连续　proofs/def-dep.compactopen-continuous.md

## 它能推出什么 / 谁在用它
- 被 `prop.cg-function-space` 函数空间弱 Hausdorff 用
- 被 `prop.compact-open-discrete` 离散时函数空间是积 用

> 说明见 `notes/def.compact-open-topology.md`
