# 拟紧对象　`def.quasi-compact`
拟紧对象（Quasi-Compact Object）
layer 15 · 定义 · 拓扑斯 · 范畴论

site $\mathcal{C}$ 的对象 $X$ 叫**拟紧的**，如果任给生成覆盖筛的族 $(X_{i} \to X)_{i \in I}$，都存在**有限**的 $J \subseteq I$，使 $(X_{i} \to X)_{i \in J}$ 生成的筛**也是**覆盖筛。
> 陈述续见 `nodes/def.quasi-compact.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.grothendieck-topology` Grothendieck 拓扑：用到了定义 Grothendieck 拓扑　proofs/def-dep.topology-qc.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.pretopos-qcqs` 预拓扑斯由拓扑斯唯一确定
- 被 `thm.pretopos-qcqs` 预拓扑斯由拓扑斯唯一确定 用
- 被 `def.quasi-separated` 拟分离对象 用
- 被 `thm.qcqs-chaus-equiv` qc 与 qcqs 的判定 用

## 说明
这就是**紧性**在剥掉拓扑之后剩下的形状：**任何覆盖都有有限子覆盖**。紧 Hausdorff 空间在 $\mathrm{Cond}$ 里正是「拟紧」的那批对象 —— 后面凝聚态集的定义就是靠它写下来的，所以这个名字值得记牢。
