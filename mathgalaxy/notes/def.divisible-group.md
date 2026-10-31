# 可除群　`def.divisible-group`　·　说明
根 `../`

**读法**：可除就是「随便除以正整数都除得尽」。$\mathbb{Q}$ 有这条性质；$\mathbb{Z}$ 没有（$2x = 1$ 无解）；$\mathbb{Z}/2$ 也不行 —— $2x = 0$ 恒有解，但 $2x = 1$ 无解。要点是「$n$ 倍映射**满射**」（取遍整个群），不只是「方程有解到 $0$」。

**结构定理**：每个可除群同构于 $\mathbb{Q}^{(I)} \oplus \bigoplus_{p}\bigl(\mathbb{Z}[1/p]/\mathbb{Z}\bigr)^{(J_{p})}$，即可除群完全由这些「秩」决定。

⭐ 在 $\mathbb{Z}$ 上：「可除」与「内射」是同一件事（`thm.pid-injective-divisible`）。直观上「除以 $n$」正是「沿 $n\mathbb{Z} \rightarrowtail \mathbb{Z}$ 延拓」。

📌 商：可除群的商可除（`prop.divisible-quotient`）；**子群**不一定（$\mathbb{Z} \subseteq \mathbb{Q}$）。
