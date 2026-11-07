# 有理标准形　`thm.rational-canonical-form`　·　说明
根 `../`

**唯一性**：设 $\bigoplus_{i} R/(d_{i}) \cong \bigoplus_{j} R/(e_{j})$，两条链都整除。对不可约 $p \in K[x]$ 与 $k \ge 1$，令 $M[p^{k}] := \{m : p^{k}m = 0\}$ —— 这是由 $M$ 本身决定的子模，不依赖分解。对 $R/(d)$，写 $d = p^{v}u$、$p \nmid u$，由中国剩余定理 $R/(d) \cong R/(p^{v}) \oplus R/(u)$，故 $R/(d)[p^{k}] \cong R/(p^{\min(k,v)})$。于是 $M[p^{k}] \cong \bigoplus_{i} R/(p^{\min(k, v_{p}(d_{i}))})$；把 $p^{k-1}M[p^{k}]/p^{k}M[p^{k}]$ 看成 $R/(p)$-向量空间，其维数恰为「$v_{p}(d_{i}) \ge k$ 的 $i$ 的个数」$c_{k}(p)$。这个维数由 $M$ 决定，故所有 $c_{k}(p)$ 由 $M$ 决定。注意整除链是**递增**的 $d_{1}\mid d_{2}\mid\cdots\mid d_{s}$，故 $v_{p}(d_{1})\le\cdots\le v_{p}(d_{s})$；把 $c_{k}(p)$ 从大端读：$\#\{k : c_{k}(p)\ge i\}$ 数的是「满足 $v_{p}(d_{j})\ge k$ 的 $j$ 至少有 $i$ 个」的那些 $k$，而 $j$ 单调递增，所以它等于 $v_{p}(d_{s-i+1})$。于是 $v_{p}(d_{s-i+1}) = \#\{k : c_{k}(p) \ge i\}$ 由 $M$ 决定（$i=1$ 对应链上最大的 $d_{s}$）；

> 续见 notes/thm.rational-canonical-form.7.md
