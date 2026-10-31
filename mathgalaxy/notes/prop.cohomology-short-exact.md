# 同调的两条正合列　`prop.cohomology-short-exact`　·　说明
根 `../`

**证明。** $d^{k}\circ d^{k-1} = 0$ 说明 $d^{k}$ 诱导出一个映射
$$D : \operatorname{coker}(d^{k-1}) = K^{k}/B^{k} \longrightarrow Z^{k+1},$$
（良定义：$B^{k} \subseteq Z^{k}$，因为 $d^{k}$ 把 $B^{k}$ 杀死 ✓）。逐段读这条列：
- **$H^{k} = \ker D$**：$D$ 的核是 $Z^{k}/B^{k}$，正是 $H^{k}$ ✓，这就是左端的正合性；
- **$\operatorname{im}D = B^{k+1}$**：$D$ 的像就是 $d^{k}(K^{k}) = B^{k+1}$ ✓，这就是中间的正合性；
- **$\operatorname{coker}D = Z^{k+1}/B^{k+1} = H^{k+1}$** ✓，即右端的正合性。
三段合起来就是整条列处处正合 ✓。∎
⭐ 这条列常常写成两条短正合列再拼起来：
$$0 \to H^{k} \to K^{k}/B^{k} \to B^{k+1} \to 0, \qquad 0 \to B^{k+1} \to Z^{k+1} \to H^{k+1} \to 0.$$
后面构造谱序列时用的正是这两条。

⭐ 用途：它把「同调」拆成两条只管闭链与上边缘的短正合列。**谱序列的全部技术内容就是在这些短正合列之间做逐步比较。**
