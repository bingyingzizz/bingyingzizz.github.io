# 满-单分解　`prop.pretopos-factorization`
预拓扑斯中的满-单分解
layer 16 · 命题 · 拓扑斯 · 范畴论

设 $\mathcal{C}$ 是预拓扑斯。则

1. $\mathcal{C}$ 是**平衡的**：既单又满的态射一定是同构；
2. 每个态射都是**严格的**：$\operatorname{im} f \cong \operatorname{coim} f$；
3. 每个态射都有**唯一**的满-单分解
> 陈述续见 `nodes/prop.pretopos-factorization.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.pretopos` 预拓扑斯 + `def.effective-equivalence` 有效等价关系 + `def.regular-epi` 正则满态射：预拓扑斯 $\implies$ 满-单分解　proofs/imp.pretopos-factorization.md
- `def.pretopos` 预拓扑斯：用到了定义 预拓扑斯　proofs/def-dep.pretopos-factorization.md
- `def.image` 像 / 余像：用到了定义 像 / 余像　proofs/def-dep.image-pretopos-factorization.md

## 说明
这三条在 $\mathbf{Set}$ 里都理所当然，但在一般范畴里都要证。它们合起来说：「**预拓扑斯里的像 = 商**」，与集合里「像就是按核对取商」完全一致。证明见边上那条推导。
