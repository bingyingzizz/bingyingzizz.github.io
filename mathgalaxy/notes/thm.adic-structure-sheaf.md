# adic 结构层是层　`thm.adic-structure-sheaf`　·　说明
根 `../`

⭐ 证明的关键是一个「借道概形」的技巧：有映射 $\psi : \operatorname{Spec} A \to \operatorname{Spa}(A,A^+)$，把素理想 $\mathfrak{p}$ 送到 $A \to \operatorname{Frac}(A/\mathfrak{p}) \to \{0,1\}$。有理开集在 $\psi$ 下的原像正是 $D(f)$，于是 $\mathcal{O}_{\operatorname{Spa}(A,A^+)}$ 是 $\mathcal{O}_{\operatorname{Spec} A}$ 在 $\psi$ 下的**推前**；推前保层。

⭐ (iii) 说明 $\mathcal{O}^+$ 不是额外结构，而是 $\mathcal{O}$ 里「逐点 $\le 1$」的那部分 —— 与 `prop.huber-subring-recovery` 是同一句话的局部版本。
