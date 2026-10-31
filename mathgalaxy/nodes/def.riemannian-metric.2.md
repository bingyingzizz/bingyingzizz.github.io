# 黎曼度量　`def.riemannian-metric`　·　续页（第 2 页）
[在星图里打开](../#n=def.riemannian-metric)　·　第 1 页 [nodes/def.riemannian-metric.md](./def.riemannian-metric.md)

## 陈述（续）
$$g_{p} : T_{p}M\times T_{p}M\longrightarrow\mathbb{R}$$

（双线性、对称、正定），并且对任意光滑向量场 $X,Y$，函数 $p\mapsto g_{p}(X_{p},Y_{p})$ 光滑。$(M,g)$ 叫**黎曼流形**。在卡里写成
$$g = \sum_{i,j=1}^{n}g_{ij}\,\mathrm{d}x^{i}\mathrm{d}x^{j},\qquad g_{ij} = g(\partial_{i},\partial_{j}),$$

其中 $(g_{ij})$ 对称正定。由此得到长度与体积：
$$L(\gamma) = \int_{a}^{b}\sqrt{g_{\gamma(t)}\bigl(\dot\gamma(t),\dot\gamma(t)\bigr)}\,\mathrm{d}t ,\qquad \mathrm{d}V = \sqrt{\det(g_{ij})}\,\mathrm{d}x^{1}\cdots\mathrm{d}x^{n}.$$

> 续见 [nodes/def.riemannian-metric.3.md](./def.riemannian-metric.3.md)
