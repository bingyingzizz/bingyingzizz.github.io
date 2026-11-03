# 内射的单射可裂　`prop.injective-splitting`　·　说明
根 `../`

- (1) $\implies$ (2)：**一行**（内射性直接给收缩）。
- (2) $\implies$ (3)：**要用推出图**：给定 $0 \to I \to M \to M_{2} \to 0$，把 (2) 用在 $I \rightarrowtail M$ 上即得分裂。
- (3) $\implies$ (1)：**这一步要用“提升”**：给 $I \rightarrowtail M$ 与 $I \to N$，取推出 $M \to P$，于是 $0 \to N \to P \to \operatorname{coker} \to 0$ 分裂，把分裂的截面与 $M \to P$ 复合即得 $M \to N$ 的提升。⚠️ **需要“有推出”**（阿贝尔范畴里总有），不需要足够多内射。

⚠️ **只在 $R$-模范畴（或阿贝尔范畴）里说**：(3) 里的「短正合列」要能分裂，前提是**有核与余核**；(2) 里的「收缩」要用态的复合。这两条在非阿贝尔范畴里要重写。
