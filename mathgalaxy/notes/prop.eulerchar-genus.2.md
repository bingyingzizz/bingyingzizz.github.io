# Euler 示性数与亏格　`prop.eulerchar-genus`　·　说明
根 `../`

**二、连通和公式（完整）**：$\chi(M\#N)=\chi(M)+\chi(N)-2$。证：取 $M$、$N$ 的有限剖分使挖去的开球各是一个 $2$-单形的内部；删去一个开 $2$-单形后 $V$、$E$ 不变、$F$ 减一，故 $\chi(M\setminus D^{2})=\chi(M)-1$，$N$ 同理；沿边界圆 $S^{1}$ 粘回时用 $\chi(A\cup B)=\chi(A)+\chi(B)-\chi(A\cap B)$（对有限复形数胞腔，或由 `thm.mv-homology` 的长正合列取秩），而 $\chi(S^{1})=0$，故 $\chi(M\#N)=(\chi(M)-1)+(\chi(N)-1)-0=\chi(M)+\chi(N)-2$。归纳：$S^{2}$ 的 $\chi=2$，$T^{2}$ 的 $\chi=0$，$g$ 个环面的连通和 $\chi=2-2g$。

> 续见 notes/prop.eulerchar-genus.3.md
