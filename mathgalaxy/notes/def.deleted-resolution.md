# 删除消解　`def.deleted-resolution`　·　说明
根 `../`

**为什么值得单独命名。** 求导时，函子并不是作用在**增广**上的：真正算的是删除消解上的复形



$$\operatorname{Ext}^{n}_{R}(M, N) = H^{n}\bigl(\operatorname{Hom}_{R}(P_{\bullet}, N)\bigr), \qquad \operatorname{Tor}_{n}^{R}(M, N) = H_{n}\bigl(P_{\bullet} \otimes_{R} N\bigr).$$



右边两个 $H$ 取的都是删除消解本身，而不是带 $M$ 的那条。见「扩展群的双边算法」与「挠积」。

**两个容易翻的细节。** ① 删除消解**不再正合**：$H_{0}(P_{\bullet}) = P_{0}/\operatorname{im} d_{1} \cong M$，高次同调全为零 —— 它「只在 $0$ 次与原来不同」；② 也有书把 $M$ 留在 $-1$ 次（叫**增广复形**），两者只差一项，写公式时必须说清用的是哪一个。

⚠️ **记号陷阱**：$\operatorname{Hom}(P_{\bullet}, N)$ 是把 $N$ 看成支在 $0$ 次的复形之后取的 Hom 复形，其次数与 $P_{\bullet}$ 的**上下标方向相反**（不上对偶就只得到链复形）；所以那里写 $H^{n}$，这里写 $H_{n}$。
