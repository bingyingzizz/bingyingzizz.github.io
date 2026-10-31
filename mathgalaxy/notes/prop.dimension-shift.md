# 维数转移　`prop.dimension-shift`　·　说明
根 `../`

**证明（Ext 一侧：用 $N$ 的内射消解）。** 取 $N$ 的内射消解 $N \to I^{\bullet}$。$I^{k}$ 内射使 $\operatorname{Hom}(-, I^{k})$ 正合，故把短正合列逐项作用后得到**复形的短正合列**（方向相反）
$$0 \to \operatorname{Hom}(M, I^{\bullet}) \to \operatorname{Hom}(P, I^{\bullet}) \to \operatorname{Hom}(K, I^{\bullet}) \to 0 .$$
取它的上同调长正合列
$$\cdots \to \operatorname{Ext}^{n}(M, N) \to \operatorname{Ext}^{n}(P, N) \to \operatorname{Ext}^{n}(K, N) \xrightarrow{\ \delta\ } \operatorname{Ext}^{n+1}(M, N) \to \operatorname{Ext}^{n+1}(P, N) \to \cdots$$
而 $P$ 投射使 $\operatorname{Ext}^{k}(P, N) = 0$（$k \ge 1$），于是每一段都退化成同构：$\delta$ 是双射，即 $\operatorname{Ext}^{n+1}(M, N) \cong \operatorname{Ext}^{n}(K, N)$ ✓。
**Tor 一侧（对偶：把短正合列张量 $N$）。** $\otimes$ 右正合，故张量后 $P\otimes N \to M\otimes N$ 仍满；左端的单射可以断掉，那正是 $\operatorname{Tor}$ 冒出来的地方。取长正合列
$$\cdots \to \operatorname{Tor}_{n+1}(P, N) \to \ope

> 续见 notes/prop.dimension-shift.2.md
