# 嵌入定理的细化　`prop.mitchell-exactness`　·　说明
根 `../`

**证明（只用到「全忠实 + 正合」）。**
**① 正合。** 这是 Freyd–Mitchell 定理陈述的一部分（正合 = 保有限极限与有限余极限），于是核、余核、像、短正合列都被原样搬过去 ✓。
**② 反射投射。** 设 $EP$ 在 $A\text{-}\mathbf{Mod}$ 里投射，即 $\operatorname{Hom}_{A\text{-}\mathbf{Mod}}(EP, -)$ 正合。把它限制到 $E$ 的像上仍然正合；而 $E$ 全忠实给出自然同构
$$\operatorname{Hom}_{\mathcal{C}}(P, X) \;\cong\; \operatorname{Hom}_{A\text{-}\mathbf{Mod}}(EP, EX),$$
所以 $\operatorname{Hom}_{\mathcal{C}}(P, -)$ 正合 ✓，即 $P$ 在 $\mathcal{C}$ 里投射 ✓。（用到的只有「$E$ 全忠实」—— 一个满射被 $E$ 送到满射是因为 $E$ 正合、保商。）
**③ 反射内射。** 对偶：$\operatorname{Hom}_{\mathcal{C}}(-, I) \cong \operatorname{Hom}(-, EI)$，$EI$ 内射使右边把单态射送到满态射；而 $E$ 正合把 $\mathcal{C}$ 里的单态射送到单态射，于是左边也如此 ✓。
**④ 注意方向。** 上面证的是「模范畴里投射 $\implies$ $\m

> 续见 notes/prop.mitchell-exactness.2.md
