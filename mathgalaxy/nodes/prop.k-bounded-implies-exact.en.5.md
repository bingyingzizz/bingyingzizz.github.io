# K-Bounded Exactness Implies Exactness　`prop.k-bounded-implies-exact`
English entry · root `../`
[in graph](../#n=prop.k-bounded-implies-exact)　·　[Chinese page (authoritative)](./prop.k-bounded-implies-exact.md)

⚠️ **Where the original proof goes wrong**: It tries to apply boundedness at $M^{n+1}$ with bound $K$ to $s'_{i+1} - s'_{i}$, obtaining $\|s'_{i+1} - s'_{i}\| \le K\|d(s'_{i+1}-s'_{i})\| + \varepsilon$. The definition, however, gives an estimate **at the other end** (reducing $\|s - ds'\|$ to $K\|ds\| + \varepsilon$) and **cannot** bound $\|s'\|$ itself. The resulting geometric series therefore fails to converge.

> continued in nodes/prop.k-bounded-implies-exact.en.6.md
