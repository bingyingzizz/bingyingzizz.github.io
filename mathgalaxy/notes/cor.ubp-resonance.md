# 共振集是稠密 G_δ　`cor.ubp-resonance`　·　说明
根 `../`

证法：令 $\Omega_k = \{x : M(x) = \sup_i\|u_i x\| > k\} = \bigcup_i \{x : \|u_i x\| > k\}$，是开集；

$R = \bigcap_k \Omega_k$ 是 $G_\delta$。

若某个 $\Omega_k$ 不稠密，则存在球 $B(x_0, r) \subseteq \Omega_k^c$，球上 $M \le k$，用与 UBP 同样的平移 + 伸缩得 $\sup_i\|u_i\| \le 2k/r$，矛盾。

⭐ 意义：「发散」不是个别点，而是**几乎处处**。经典应用：Fourier 级数部分和算子满足 $\|S_N\| \to \infty$，于是**存在**连续函数其 Fourier 级数在某点发散（du Bois-Reymond 1876）—— 而且这样的函数「很多」。
