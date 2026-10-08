# 子对象构成有界格　`prop.subobject-lattice`
预拓扑斯中子对象构成有界格
layer 15 · 命题 · 拓扑斯 · 范畴论

设 $\mathcal{C}$ 是预拓扑斯，$X \in \mathcal{C}$。则子对象全体 $\{X' : X' \rightarrowtail X\}$ 构成一个**有界格**：
> 陈述续见 `nodes/prop.subobject-lattice.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.subobject` 子对象：用到了定义 子对象　proofs/def-dep.subobject-lattice.md
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-subobject-lattice.md

## 说明
「有界」指的是这个格有最小元（始对象出发的那个子对象）与最大元（$X$ 自己）。把「子对象」当成一个格来看，后面讲拓扑斯内部逻辑时用的就是它 —— 这里的交、并分别是逻辑的「且」与「或」。
