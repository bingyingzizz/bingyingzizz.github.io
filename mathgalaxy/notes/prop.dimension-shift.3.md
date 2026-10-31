# 维数转移　`prop.dimension-shift`　·　说明
根 `../`

⭐ **为什么它叫「转移」**：把「$M$ 的 $n+1$ 次不变量」换成「它的合冲的 $n$ 次不变量」。于是任何关于 $\operatorname{Ext}^{n}$ 的陈述都能**逐次降维**，直到落在 $\operatorname{Ext}^{0} = \operatorname{Hom}$ 或 $\operatorname{Ext}^{1}$ 上 —— 这两个是唯一「看得见元素」的层次。

⚠️ 条件「$P$ 投射」不能省：$\operatorname{Ext}^{n+1}(M,N)\cong\operatorname{Ext}^n(K,N)$ 的证明完全靠 $P$ 的那一项消失。对一般短正合列只有一条**五段长正合列**，不是同构。

**与合冲联用**：$\operatorname{Ext}^{n}(M, N) \cong \operatorname{Ext}^{1}(\Omega^{n-1}M, N)$，配上「一阶扩展的分类」，就把高次 Ext 变成了「$N$ 被 $\Omega^{n-1}M$ 的扩张」。
