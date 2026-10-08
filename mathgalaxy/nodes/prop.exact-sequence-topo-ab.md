# 拓扑阿贝尔群正合列的搬运　`prop.exact-sequence-topo-ab`
拓扑正合列 $\implies$ 凝聚态正合列
layer 19 · 命题 · 拓扑阿贝尔群 · 凝聚态数学

设

$$0 \longrightarrow M' \xrightarrow{\;u\;} M \xrightarrow{\;v\;} M'' \longrightarrow 0$$

是拓扑阿贝尔群的**正合列**，$M''$ **弱 Hausdorff**，并且满足：

**（紧提升条件）** 对每个紧 Hausdorff $K'' \subseteq M''$，存在紧 Hausdorff $K \subseteq M$ 使 $K'' \subseteq v(K)$。

则凝聚态阿贝尔群的正合列
> 陈述续见 `nodes/prop.exact-sequence-topo-ab.2.md`


## 为什么成立（入边，证明在 proofs/）
- `prop.abtop-to-abcond` 拓扑阿贝尔群嵌入凝聚态：用到了定义 拓扑阿贝尔群嵌入凝聚态　proofs/def-dep.exacttopo-abtopabcond.md
- `def.weak-hausdorff` 弱 Hausdorff 空间：用到了定义 弱 Hausdorff 空间　proofs/def-dep.exacttopo-weakhaus.md

> 说明见 `notes/prop.exact-sequence-topo-ab.md`
