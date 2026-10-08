# 预标准拓扑　`def.precanonical-topology`
预标准拓扑（Precanonical Topology）
layer 16 · 定义 · 拓扑斯 · 范畴论

预拓扑斯 $\mathcal{C}$ 上的**预标准预拓扑**由所有**有限**族 $(X_{i} \to X)_{i \in I}$ 组成，使得

$$\coprod_{i \in I} X_{i} \longrightarrow X$$

是满态射。它生成的 Grothendieck 拓扑叫**预标准拓扑**，配它的 $\mathcal{C}$ 是一个 site。

## 为什么成立（入边，证明在 proofs/）
- `def.pretopos` 预拓扑斯：用到了定义 预拓扑斯　proofs/def-dep.pretopos-precanonical.md
- `def.grothendieck-topology` Grothendieck 拓扑：用到了定义 Grothendieck 拓扑　proofs/def-dep.topology-precanonical.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.pretopos-qcqs` 预拓扑斯由拓扑斯唯一确定
- 被 `prop.precanonical-preserves` 余积与商在层范畴中不变 用

## 说明
生成它的其实是两类覆盖：**有限不交并**（$\coprod_{i \in I} X_{i} \cong X$）与**满射** $(X_{i} \to X)$。名字里的「预」是因为它比标准拓扑**粗** —— 但仍然是次标准的。
