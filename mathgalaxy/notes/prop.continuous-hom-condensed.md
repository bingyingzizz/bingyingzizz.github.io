# 连续同态与内部 Hom　`prop.continuous-hom-condensed`　·　说明
根 `../`

**证明。** 记左边的凝聚态阿贝尔群为 $S \mapsto C(S, C_{\mathbb{Z}}(M,N))$。对紧 Hausdorff 的 $S$，两边逐项算：
- 右边：
$$\operatorname{Hom}_{\mathbb{Z}}(\underline{M},\underline{N})(S) = \operatorname{Hom}\bigl(S, \operatorname{Hom}_{\mathbb{Z}}(\underline{M},\underline{N})\bigr) = \operatorname{Hom}_{\mathbb{Z}}\bigl(\underline{M},\ \operatorname{Hom}(S, \underline{N})\bigr) = \operatorname{Hom}_{\mathbb{Z}}\bigl(\underline{M},\ C(S, N)\bigr) = C_{\mathbb{Z}}\bigl(M,\ C(S,N)\bigr),$$
第二步是 $(S, -)$ 与内部 Hom 的伴随，最后一步用「$M$ 紧生成时 $\underline{M}$ 是全忠实嵌入」（上一条）；
- 左边：$C_{\mathbb{Z}}(M,N)(S) = \operatorname{Hom}\bigl(S, C_{\mathbb{Z}}(M,N)\bigr) = C\bigl(S,\ C_{\mathbb{Z}}(M,N)\bigr)$；
- 两端之间由**指数律**（紧生成 / 局部紧下成立）搭桥：
$$C\bigl(M,\ C(S,N)\bigr) \cong C(M\times S,\ N) \cong C\bigl(S,\ C(M,N)\bigr).$$
三条串起来就是所要的自然同构（同态条件在指数律下逐

> 续见 notes/prop.continuous-hom-condensed.2.md
