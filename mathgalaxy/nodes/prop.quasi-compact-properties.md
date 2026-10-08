# 拟紧的性质　`prop.quasi-compact-properties`
拟紧对象的性质
layer 13 · 命题 · 拓扑斯 · 范畴论

1. site $\mathcal{C}$ 中 $X$ 拟紧 $\iff$ $X$ 在标准拓扑下拟紧；
2. 若 $X$ 有一个由**拟紧**对象组成的**有限**覆盖，则 $X$ 拟紧；
3. 预拓扑斯 $\mathcal{C}$（配预标准拓扑）上的层 $F$ 拟紧 $\iff$ 存在满射 $X \to F$ 且 $X \in \mathcal{C}$。

## 为什么成立（入边，证明在 proofs/）
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-qc.md

## 说明
第 3 条最有用：它把「层 $F$ 拟紧」换成了「$F$ 能被一个小对象盖住」—— 在凝聚态集里，这就是「凝聚态集 $X$ 拟紧 $\iff$ 存在紧 Hausdorff 空间到它的满射」。
