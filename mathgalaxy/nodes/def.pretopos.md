# 预拓扑斯　`def.pretopos`
预拓扑斯（Pretopos）
layer 15 · 定义 · 拓扑斯 · 范畴论

范畴 $\mathcal{C}$ 叫**预拓扑斯**，如果

1. **有限极限存在**；
2. **有限余积存在**，并且是**不交的**与**万有的**；
3. **等价关系是有效的且万有的**；
4. **满态射是正则的且万有的**。

## 为什么成立（入边，证明在 proofs/）
- `def.universal-colimit` 万有关系：用到了定义 万有关系　proofs/def-dep.universal-pretopos.md
- `def.effective-equivalence` 有效等价关系：用到了定义 有效等价关系　proofs/def-dep.effective-pretopos.md
- `def.regular-epi` 正则满态射：用到了定义 正则满态射　proofs/def-dep.regular-pretopos.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.pretopos-factorization` 满-单分解
- 被 `prop.pretopos-factorization` 满-单分解 用
- 被 `prop.condensed-criterion` 凝聚态集的刻画 用
- 被 `def.precanonical-topology` 预标准拓扑 用
- 被 `def.topos` 拓扑斯 用

> 说明见 `notes/def.pretopos.md`

- …另有出边，续页见 `nodes/def.pretopos.2.md`
