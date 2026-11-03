# 内射复形：零调、拟同构与同伦　`prop.injective-complex-homotopy`　·　说明
根 `../`

**各方向用到的假设**（容易方向不需内射性，反向需从最低次数归纳分裂）：
- 同伦平凡 $\implies$ 零调、同伦等价 $\implies$ 拟同构：用同伦映射诱导相同上同调映射，不要求内射或有界；仅“零调”与所有上同调为零是定义展开。
- 零调 $\implies$ 同伦平凡：从最低非零次数归纳使 $Z^n$ 内射，利用 $Z^n$ 内射分裂 $0\to Z^n\to I^n\to Z^{n+1}\to0$，再拼收缩；仅中项 $I^n$ 内射不能直接保证分裂。
- 给定拟同构 $f:I\to J\implies f$ 同伦等价：锥仍有界下方且逐项内射，由锥零调判据及上一条得到锥可缩。若“拟同构”指任意之字形，需再用有界下方内射复形的 K-内射比较定理。
- 内射性不能随意删：$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$ 零调却不可缩。有界下方也不能直接删：在 $R=k[\varepsilon]/(\varepsilon^2)$ 上双向无限的 $R\xrightarrow{\varepsilon}R$ 复形逐项内射、零调，但 $\varepsilon h+h\varepsilon$ 不可能等于 $1$。
