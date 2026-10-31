# 离散对数　`def.discrete-log`　·　说明
根 `../`

唯一性来自 $g$ 是生成元（每个单位恰好对应一个指数）；「$k$ 的范围是 $0 \le k < \varphi(n)$」只是取代表元。



它把**乘法变成加法**：$\log_{g}(ab) = \log_{g}a + \log_{g}b \pmod{\varphi(n)}$ —— 与实对数同构，把 $(\mathbb{Z}/n)^{\times}$ 与 $\mathbb{Z}/\varphi(n)$ 对齐。



计算上：正向（给定 $k$ 算 $g^{k}$）是快速幂，$O(\log k)$；反向（给定 $a$ 求 $k$）没有已知的多项式算法，最好的通用方法是 baby-step giant-step（$O(\sqrt{n})$）与 index calculus。**这个不对称性就是 Diffie–Hellman 与 ElGamal 的基础** —— 也是「离散对数问题」在密码学里被当作困难问题的原因。
