# Mayer–Vietoris（同调）　`thm.mv-homology`　·　说明
根 `../`

$$0 \to S_{*}(U \cap V) \to S_{*}(U) \oplus S_{*}(V) \to S_{*}(U) + S_{*}(V) \to 0,$$

映射是 $a \mapsto (a, -a)$ 与 $(a, b) \mapsto a + b$。正合性：$S_{*}(U) \cap S_{*}(V) = S_{*}(U \cap V)$（每条单纯形的像同时在 $U$、$V$ 里，故在交里）；满射由定义；核由 $a + b = 0$ 即 $b = -a$ 得。

**第六步：接长正合列。** 对上面的短正合列用 `thm.long-exact-pair`（链复形版，纯追图），得长正合列；其中 $H_{p}(S_{*}(U) \oplus S_{*}(V)) = H_{p}(U) \oplus H_{p}(V)$，而 $H_{p}(S_{*}(U) + S_{*}(V)) \cong H_{p}(X)$ 由第四步。把两个映射对上：$(a) \mapsto (a, -a)$ 给出 $\Phi[z] = (i_{*}[z], -j_{*}[z])$，$(a, b) \mapsto a + b$ 给出 $\Psi[a, b] = [a + b]$。∎

**约化版。** 对增广链复形做同样的论证。当 $U \cap V \ne \emptyset$ 时取基点 $x_{0} \in U \cap V$，增广映射 $\varepsilon$ 在三条复形上一致，短正合列连增广项仍正合，故得到约化长正合列。$U \cap V = \emptyset$ 时 $\tilde{H}_{0}$ 段失效，反例见陈述。

> 续见 notes/thm.mv-homology.7.md
