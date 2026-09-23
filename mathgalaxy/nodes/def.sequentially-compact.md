# 列紧　`def.sequentially-compact`
列紧 / 序列紧（Sequentially Compact）
layer 13 · 定义 · 度量空间 · 拓扑学

距离空间 (X, d) **列紧**（序列紧），当且仅当 $X$ 中每个序列都有收敛到 $X$ 中的子列：
> 陈述续见 `nodes/def.sequentially-compact.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.compact` 紧：紧 $\implies$ 列紧　proofs/imp.compact-seqcompact.md
- `def.complete` 完备 + `def.totally-bounded` 全有界：完备 + 全有界 $\implies$ 列紧（对角线法）　proofs/imp.complete-totbdd-seqcompact.md
- `def.metric-space` 距离空间：用到了定义 距离空间　proofs/def-dep.metric-seq-compact.md

## 它能推出什么 / 谁在用它
- ⇒ `def.totally-bounded` 全有界
- ⇒ `def.complete` 完备
- ⇒ `def.compact` 紧

refs: Munkres, Topology, §28

- …另有出边，续页见 `nodes/def.sequentially-compact.3.md`

## 说明
在度量空间里「列紧 $\iff$ 紧」（见下面的箭头），但在一般拓扑空间里**不等价** —— 列紧严格更强。度量空间好用的地方正是这里。$n$$n$注意子列收敛到的是 $X$ 中的点：列紧是内蕴性质，不看外面那个空间。
